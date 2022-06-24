import React, { Suspense } from 'react';
import { Col, Row } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import '../../styles/colors.scss';

const Contact = React.lazy(() => import('../Contact/Contact'));
const Experience = React.lazy(() => import('../Experience/Experience'));
const Landing = React.lazy(() => import('../Landing/Landing'));
const Nav = React.lazy(() => import('../Nav/Nav'));
const Projects = React.lazy(() => import('../Projects/Projects'));
const Sidebar = React.lazy(() => import('../Sidebar/Sidebar'));

const Loader = <div>Loader</div>;

function App() {
    return (
        <div className="App vh-100 bg-dark">
            <BrowserRouter>
                <Nav />
                <Row className="container px-0">
                    <Col
                        className="text-center px-0 py-10 d-flex align-items-end"
                        xs={2}
                        lg={1}
                    >
                        <Sidebar />
                    </Col>
                    <Col className="content my-auto" xs={10} lg={11}>
                        <Suspense fallback={Loader}>
                            <Routes>
                                <Route path="/" element={<Landing />} />
                                <Route
                                    path={`/experience`}
                                    element={<Experience />}
                                />
                                <Route
                                    path={`/projects`}
                                    element={<Projects />}
                                />
                                <Route
                                    path={`/contact`}
                                    element={<Contact />}
                                />
                            </Routes>
                        </Suspense>
                    </Col>
                </Row>
            </BrowserRouter>
        </div>
    );
}

export default App;
