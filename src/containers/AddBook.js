/**
 * Created by stefan.wang on 8/24/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import bookActions from '../actions/bookAction'
import {validate, validateType} from '../common/validate'
import Form from '../components/public/Form'
import FormField from '../components/public/FormField'
import ButtonField from '../components/public/ButtonField'

class AddBook extends React.Component {

    constructor(props) {
        super(props);
        this.nameError = "";
        this.authorError = "";
    }

    AddBookHandle() {
        if (validate(validateType.username, this.refs.name.value)) {
            const { state, dispatch } = this.props;
            let book = {id: state.maxid, name: this.refs.name.value, author: this.refs.author.value};
            dispatch(bookActions.addBook(book));
            // window.location.hash = "/blog";
            this.props.history.pushState(null, '/blog');
            // this.props.history.replaceState(null, 'blog');
            // this.props.history.goBack();
        } else {
            // alert('name is error')
            this.nameError = "name error";
            this.authorError = "author error";
        }
    }

    render() {
        return (
            <div>
                <Form title="Add Book">
                    <FormField required={true} error={this.nameError} label="name:">
                        <input type="text" ref="name" />
                    </FormField>

                    <FormField required={true} error={this.authorError} label="author:">
                        <input type="text" ref="author" />
                    </FormField>

                    <ButtonField>
                        <input type="button" value="Add" onClick={this.AddBookHandle.bind(this)} />
                        <input type="button" value="reset" />
                    </ButtonField>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: {maxid: state.book.maxId}
    };
};

export default connect(mapStateToProps)(AddBook);