const remoteDocs = [
    {
        project: 'gvault',
        slug: 'security',
        title: 'GVault Security Policy',
        source: {
            owner: 'megbailey',
            repo: 'gvault',
            branch: 'main',
            path: '.github/SECURITY.md',
        },
    },
    {
        project: 'gvault',
        slug: 'terms',
        title: 'GVault Terms of Service',
        source: {
            owner: 'megbailey',
            repo: 'gvault',
            branch: 'main',
            path: 'docs/TERMS.md',
        },
    },
    {
        project: 'gvault',
        slug: 'privacy',
        title: 'GVault Privacy Policy',
        source: {
            owner: 'megbailey',
            repo: 'gvault',
            branch: 'main',
            path: 'docs/PRIVACY.md',
        },
    },
]

export const githubRawUrl = ({ owner, repo, branch, path }) => (
    `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/${path}`
)

export const githubBlobUrl = ({ owner, repo, branch, path }) => (
    `https://github.com/${owner}/${repo}/blob/${branch}/${path}`
)

export const findRemoteDoc = (project, slug) => (
    remoteDocs.find((doc) => doc.project === project && doc.slug === slug)
)

export const resolveRemoteDocHref = (href, currentDoc) => {
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return href
    }

    if (/^https?:\/\//i.test(href)) {
        return href
    }

    const currentDir = currentDoc.source.path.replace(/\/?[^/]+$/, '/')
    let resolvedPath

    try {
        resolvedPath = new URL(href, `https://example.invalid/${currentDir}`).pathname.replace(/^\//, '')
    } catch {
        return href
    }

    const match = remoteDocs.find((doc) => (
        doc.source.owner === currentDoc.source.owner
        && doc.source.repo === currentDoc.source.repo
        && doc.source.path === resolvedPath
    ))

    if (match) {
        return `/projects/${match.project}/${match.slug}`
    }

    return githubBlobUrl({ ...currentDoc.source, path: resolvedPath })
}

export default remoteDocs
