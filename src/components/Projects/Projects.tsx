import React from 'react';

const Projects = () => {
    const projects: { name: string; description: string }[] = [
        {
            name: 'firehouse',
            description: '',
        },
    ];

    return (
        <div>
            <h1>Projects</h1>

            {projects.map((p) => {
                return (
                    <div key={p.name}>
                        <h2>{p.name}</h2>
                        <div>{p.description}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default Projects;
