import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class R048_ReactstrapModal extends Component {
  pagination = type => {
    alert("Go " + type);
  };

  render() {
    return (
      <>
        <Pagination aria-label="Page navigation example">
          <PaginationItem disabled>
            <PaginationLink first href="#" />
          </PaginationItem>yjw1997
          <PaginationItem disabled>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem active>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">5</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#" />
          </PaginationItem>
        </Pagination>
      </>
    );
  }
}

export default R048_ReactstrapModal;
