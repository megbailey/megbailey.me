import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Navigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import {
    findRemoteDoc,
    githubBlobUrl,
    githubRawUrl,
    resolveRemoteDocHref,
} from '../../assets/content/remote-docs.js';
import '../../assets/styles/post.css';

const RemoteDoc = () => {
    const { slug, doc: docSlug } = useParams()
    const doc = findRemoteDoc(slug, docSlug)
    const [md, setMd] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        if (!doc) return;

        const controller = new AbortController()
        setMd('')
        setError('')

        fetch(githubRawUrl(doc.source), {
            cache: 'no-store',
            signal: controller.signal,
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(
                        res.status === 404
                            ? `GitHub returned 404 for ${doc.source.path}. The gvault repository needs to be public for this page to load live from main.`
                            : `Unable to load ${doc.source.path} (${res.status}).`
                    )
                }
                return res.text()
            })
            .then((text) => setMd(text))
            .catch((err) => {
                if (err.name !== 'AbortError') {
                    setError(err.message || 'Unable to load this document from GitHub.')
                }
            })

        return () => controller.abort()
    }, [doc]);

    if (!doc) {
        return <Navigate to={slug ? `/projects/${slug}` : '/projects'} replace />
    }

    const sourceUrl = githubBlobUrl(doc.source)

    return (
        <div className='reactmd'>
            <Helmet>
                <title>{`${doc.title} | megbailey.me`}</title>
            </Helmet>
            {error && (
                <p className='reactmd__error'>
                    {error}{' '}
                    <a href={sourceUrl} target='_blank' rel='noopener noreferrer'>
                        View the source on GitHub
                    </a>
                    .
                </p>
            )}
            {!error && !md && (
                <p className='reactmd__status'>Loading document…</p>
            )}
            {md && (
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        a: ({ href, children }) => {
                            const resolved = resolveRemoteDocHref(href, doc)
                            const external = /^https?:\/\//i.test(resolved)
                            return (
                                <a
                                    href={resolved}
                                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                >
                                    {children}
                                </a>
                            )
                        },
                    }}
                >
                    {md}
                </ReactMarkdown>
            )}
        </div>
    )
}

export default RemoteDoc
