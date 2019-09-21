import React from "react";
import Link from "next/link";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class NavbarClass extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="white" light expand="md" className="shadow bg-danger">
          <NavbarBrand href="/">
            <img src="/static/images/logo.png" width="130" height="90" className="p-2"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <div className="nav-link">
                  <i className="fas fa-home ml-2"></i>
                  <Link href="/">
                    <a href="#" className="text-secondary">
                      صفحه اصلی
                    </a>
                  </Link>
                </div>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <i className="fas fa-info-circle ml-2"></i>
                  درباره ما
                </DropdownToggle>
                <DropdownMenu right className="shadow rounded">
                  <DropdownItem>
                    <Link href="/about/1">
                      <a href="/about/1">چشم انداز مدیریت</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/about/2">
                      <a href="/about/2"> چارت سازمانی</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <Link href="/about/3">
                      <a href="/about/3">پیام مدیرعامل</a>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <i className="fas fa-plane ml-2"></i>
                  ناوگان هوایی
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <Link href="/navy/1">
                      <a href="/navy/1">بوئینگ 737</a>
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link href="/navy/2">
                      <a href="/navy/1">ایرباس 320</a>
                    </Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <div className="nav-link">
                  <i className="fas fa-newspaper ml-2"></i>
                  <Link href="/magazine">
                    <a href="/magazine" className="text-secondary">
                      مجله گردشگری
                    </a>
                  </Link>
                </div>
              </NavItem>

              <NavItem>
                <div className="nav-link">
                  <i className="fas fa-rss ml-2"></i>
                  <Link href="/news">
                    <a href="/news" className="text-secondary">
                      اخبار
                    </a>
                  </Link>
                </div>
              </NavItem>

              <NavItem>
                <div className="nav-link">
                  <i className="fas fa-handshake ml-2"></i>
                  <Link href="/coorporate">
                    <a href="/coorporate" className="text-secondary">
                      همکاری
                    </a>
                  </Link>
                </div>
              </NavItem>
              <NavItem>
                <div className="nav-link" href="/contact">
                  <i className="fas fa-phone ml-2"></i>
                  <Link href="/coorporate">
                    <a href="/coorporate" className="text-secondary">
                      تماس با ما
                    </a>
                  </Link>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarClass;
