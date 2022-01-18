import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";


class R036_ReactstrapBreadcrumbs extends Component {
    render() {
        return (
            <div id="top">
                <Breadcrumb tag="nav" listtag="div">
                    <BreadcrumbItem tag ="a" href="#top">Go_top</BreadcrumbItem>
                    <BreadcrumbItem tag ="a" href="#bottom">Go_bottom</BreadcrumbItem>
                </Breadcrumb>
                <div id="bottom" style={{ marginTop: "1000px" }}>
                    <sapn>bottom</sapn>
                </div>
                
            </div>
        );
    }
}

export default R036_ReactstrapBreadcrumbs;