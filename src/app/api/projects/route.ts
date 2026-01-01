import { NextResponse } from 'next/server';

export async function GET() {
    const projects = [
        {
            id: 'bootstrap',
            title: 'Bootstrap',
            domain: 'getbootstrap.esdocu.com',
            description: 'The most popular HTML, CSS, and JS library in the world.',
        },
        {
            id: 'tailwind-css',
            title: 'Tailwind CSS',
            domain: 'tailwindcss-es.com',
            description: 'A utility-first CSS framework for rapidly building custom designs.',
        }
    ];

    return NextResponse.json(projects);
}
