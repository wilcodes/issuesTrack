import React from "react";
import {
  AddButton,
  Box,
  InnerBox,
  InnerBoxText,
  RecordsBox,
} from "./MainStyles";
import WelcomeMessage from "./WelcomeMessage/WelcomeMessage";
import InputSearch from "./InputSearch/InputSearch";
import DashboardChart from "./Chart/DashboardChart";
import ModalForm from "./ModalForm/ModalForm";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreators from "../../../state/actions/actionCreators";
import Labels from "./Labels/Labels";
import Records from "./Records/Records";

interface MainProps {
  username: string;
}

const Main: React.FC<MainProps> = (props) => {
  const isModalFormOpen = useSelector(
    (state: RootStateOrAny) => state.isModalFormOpen
  );
  const dispatch = useDispatch();

  const { toggleModalForm } = bindActionCreators(ActionCreators, dispatch);
  return (
    <Box>
      <InnerBox>
        <ModalForm />
        <InnerBoxText>
          <WelcomeMessage username={props.username} />
          <AddButton onClick={() => toggleModalForm(isModalFormOpen)}>
            Register Issue!
          </AddButton>
          <InputSearch />
        </InnerBoxText>

        <DashboardChart />
      </InnerBox>

      <RecordsBox>
        <h3>Issues </h3>

        <Labels />
        <Records />
      </RecordsBox>
    </Box>
  );
};

export default Main;
