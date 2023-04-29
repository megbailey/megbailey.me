import React, { useState } from "react";
import Template from "./Template";

export default {
  title: 'Template',
  component: Template,
};

export const Default = ( ) => (
  <Template 
        menuItems={[
            {
                label: 'Navigation One',
                key: 'nav-1',
            },
            {
                label: 'Navigation Two',
                key: 'nav-2',
            },
            {
                label: (
                    <a href="/hello" target="_blank" rel="noopener noreferrer">
                        Contact Me
                    </a>
                ),
                key: 'nav-4',
            },
        ]}
  />
);
