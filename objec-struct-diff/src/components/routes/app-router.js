import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import React from 'react';
import PageWelcome from '../pages/PageWelcome';
import PageObjectDiff from "../pages/PageObjectDiff";
import PageStructureDiff from '../pages/PageStructureDiff';

function AppRouter(props) {

    return (
        <BrowserRouter>
            <div className="base-app">
                <header className="app-header">
                    <div className="inner">
                        <div className="row">
                            <div className="col-md-4"><h3 className="brand-name" style={{ marginTop: '10px' }}>JSON Diff</h3></div>
                            <div className="col-md-8" style={{ textAlign: 'right', marginTop: '10px' }}>
                                <div className="btn-group">
                                    <Link to="/" className="btn btn-primary btn-sm"> Home</Link>
                                    <Link to="/object-diff" className="btn btn-primary btn-sm"> Object diff</Link>
                                    <Link to="/structure-diff" className="btn btn-primary btn-sm"> Structure diff</Link>

                                </div>
                            </div>
                        </div>

                    </div>
                </header>
                <div className="container-fluid inner-content">
                    <Routes>
                        <Route path="/" element={<PageWelcome />}></Route>
                        <Route path="/object-diff" element={<PageObjectDiff />}></Route>
                        <Route path="/structure-diff" element={<PageStructureDiff />}></Route>
                    </Routes>
                    <Outlet />
                </div>
            </div>
        </BrowserRouter>);


}

export default AppRouter;