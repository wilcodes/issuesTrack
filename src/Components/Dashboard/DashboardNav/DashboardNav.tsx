import React, {useState} from "react";
import { Nav, NavigationElement, UserName } from "./NavStyles";
import {Burger} from "../../Home/Navigation/Hamburger/HamburgerStyles";
import {RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import * as actionCreators from "../../../state/actions/actionCreators"
interface DashboardProps {
    username:string
}
const DashboardNav:React.FC<DashboardProps> = (props) => {
    const dispatch = useDispatch();
    const isSidebarOpen = useSelector((state:RootStateOrAny)=> state.isSidebarOpen);
    const {toggleSidebar}= bindActionCreators(actionCreators,dispatch);
  return (
    <Nav>
      <NavigationElement>IssuesTrack</NavigationElement>
        <Burger open={isSidebarOpen}
                onClick={() => toggleSidebar(isSidebarOpen)}>
            <div />
            <div />
            <div />
        </Burger>
      <UserName>{props.username}</UserName>
    </Nav>
  );
};

export default DashboardNav;
