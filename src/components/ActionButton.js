import React from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Textarea from 'react-textarea-autosize';
import { connect } from "react-redux";
import { addList, addCard } from '../actions';

class ActionButton extends React.Component {

    state = {
        formOpen: false
    }

    openForm = () => {
        this.setState({
            formOpen: true
        })
    }

    closeForm = () => {
        this.setState({
            formOpen: false
        });
    };

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        });
    };

    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;

        if (text) {
            this.setState({
                text: ""
            });
            dispatch(addList(text));
        }

        return;
    };

    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;

        if (text) {
            this.setState({
                text: ""
            });
            dispatch(addCard(listID, text));
        }
    };

    //Handles pre click state of add card
    renderAddButton = () => {
        const { list } = this.props;

        //Reusable optional button properties
        const buttonText = list ? "Add another list" : "Add another card";
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15" : "inherit";

        return (
            <div
                onClick={this.openForm}
                className="openFormButtonGroup"
                style={{
                    opacity: buttonTextOpacity,
                    color: buttonTextColor,
                    backgroundColor: buttonTextBackground
                }}
            >
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        );
    };

    //Takes care of form for adding cards
    renderForm = () => {

        const { list } = this.props;

        const placeholder = list
            ? "Enter list title..."
            : "Enter title for this card...";

        const buttonTitle = list ? "Add List" : "Add Card";

        return <div>
            <Card style={{
                overFlow: "visible",
                minHeight: 80,
                minWidth: 272,
                padding: "6px 8px 2px"
            }}
            >
                <Textarea
                    placeholder={placeholder}
                    autoFocus
                    onBlur={this.closeForm}
                    value={this.state.text}
                    onChange={this.handleInputChange}
                    className="textAreaStyle"
                />
            </Card>
            <div className="formButtonGroup">
                <Button
                    onMouseDown={list ? this.handleAddList : this.handleAddCard}
                    variant="contained"
                    style={{ color: "white", backgroundColor: "#5aaC44" }}>
                    {buttonTitle}{" "}
                </Button>
                <Icon style={{ marginLeft: 8, cursor: "pointer" }} onClick={this.closeForm}>close</Icon>
            </div>
        </div>
    };

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

export default connect()(ActionButton);