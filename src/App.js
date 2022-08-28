import React from 'react';
import {Route, Link, Routes, useLocation} from 'react-router-dom';

export default function App() {
    // 👇️ with React router
    const location = useLocation();

    console.log('hash', location.hash);
    console.log('pathname', location.pathname);
    console.log('search', location.search);

    return (
        <div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </div>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}