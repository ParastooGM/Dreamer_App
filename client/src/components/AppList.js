import React from "react";
import { Container } from "reactstrap";
import { getItems, deleteItem } from "../actions/itemActions";
import AppCard from "./AppCard";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { useEffect } from "react";

function AppList(props) {
  useEffect(() => {
    props.getItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDelete(id) {
    props.deleteItem(id);
  }

  return (
    <Container>
      {props.item.items.map((dreamItem) => {
        return (
          <AppCard
            key={dreamItem._id}
            id={dreamItem._id}
            title={dreamItem.title}
            content={dreamItem.content}
            url={dreamItem.url}
            date={dreamItem.date}
            onDelete={handleDelete}
          />
        );
      })}
    </Container>
  );
}

AppList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  item: state.item, // the itemReducer, named as item in the combined root reducer.
});

export default connect(mapStateToProps, { getItems, deleteItem })(AppList);
