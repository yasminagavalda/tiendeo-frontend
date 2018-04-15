import React, {Component} from 'react';

class NewCard extends Component {

    constructor(props) {
		super(props)

		this.state = {
            title: '',
            description: '',
            image: '',
            showDescriptionError: false,
            showTitleError: false,
            styleDescriptionError: {},
            styleTitleError: {}
		}
    }

    componentWillReceiveProps(props) {
        this.setState({ 
            title: '',
            description: '',
            image: '',
            showDescriptionError: false,
            showTitleError: false,
            styleDescriptionError: {},
            styleTitleError: {}
        });
    }

    handleChangeTitle = (event) => {
        this.setState({title: event.target.value});
    }

    handleChangeDescription = (event) => {
        this.setState({description: event.target.value});
    }

    handleChangeImage = (event) => {
        this.setState({image: event.target.value});
    }

    checkCard = () => {
        if (this.state.title==='') {
            this.setState({showTitleError: true, styleTitleError: {borderBottom: '1px solid red'}})
        } else {
            this.setState({showTitleError: false, styleTitleError: {}})
        }
        if (this.state.description==='') {
            this.setState({showDescriptionError: true, styleDescriptionError: {borderBottom: '1px solid red'}})
        } else {
            this.setState({showDescriptionError: false, styleDescriptionError: {}})
        }
    
        if (this.state.title!=='' && this.state.description!=='') {
            this.props.addCard(this.state)
            this.state = {
                title: '',
                description: '',
                image: '',
                showDescriptionError: false,
                showTitleError: false,
                styleDescriptionError: {},
                styleTitleError: {}
            }
        }
    }

    render() {
        if(!this.props.show) {
            return null;
        }
        
        return (
            <div className="backdrop">
                <div className="modal-new">
                    <button className="btn-close-modal" onClick={() => this.props.closeModal()}><i className="fas fa-times"></i></button>
                    <h1>Nueva tarjeta</h1>
                    <form>
                        <input placeholder="Título *" style={this.state.styleTitleError} onChange={this.handleChangeTitle} maxLength='25' />
                        <p className="char-count">{this.state.title.length}/25</p>
                        {this.state.showTitleError ? <p className="error-msg">El título es obligatorio</p> : null}

                        <input placeholder="Descripción *" style={this.state.styleDescriptionError} onChange={this.handleChangeDescription} maxLength='120' />
                        <p className="char-count">{this.state.description.length}/120</p>
                        {this.state.showDescriptionError ? <p className="error-msg">La descripción es obligatoria</p> : null}

                        <input placeholder="Imagen (Url)" onChange={this.handleChangeImage} />
                    </form>

                    <button className="btn-save-card" onClick={this.checkCard}>
                        Añadir
                    </button>
                </div>
            </div>
        );
    }
}

export default NewCard;