import React from "react";
import { Container } from "reactstrap";
import { getItems, deleteItem } from "../actions/itemActions";
import AppCard from "./AppCard";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

function AppList(props) {
    function handleDelete(id) {
        props.deleteItem(id);
    }

    return ( <
        Container > { " " } {
            props.item.items.map((dreamItem, index) => {
                return ( <
                    AppCard key = { index }
                    id = { index }
                    title = { dreamItem.title }
                    content = { dreamItem.content }
                    onDelete = { handleDelete }
                    />
                );
            })
        } { " " } <
        /Container>
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