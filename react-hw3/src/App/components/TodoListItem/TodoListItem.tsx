import React, { Component } from "react";
import { ITodo } from "../../../types";
import "./TodoListItem.css"

interface ITodoListItemState {
    done: boolean,
    important: boolean
}

interface ITodoListItemProps extends ITodo {
    onDoneClick: () => void
    onImportantClick: () => void
}

export default class TodoListItem extends Component<ITodoListItemProps, ITodoListItemState> {

    state = {
        done: false,
        important: false
    }

    render() {
        const { text, done, important } = this.props;
        let classNames = "";
        if(done){
            classNames += " done";
        }
        if(important){
            classNames += " important"
        }
        console.log(classNames);
        
        return (
            <li className={classNames}>
                {text}
                <button onClick={() => this.props.onDoneClick()}>Done</button>
                <button onClick={() => this.props.onImportantClick()}>Important</button>

            </li>
        )
    }

}