import React, {Component} from 'react';

class EditCard extends Component {

    constructor(props) {
        super(props)

		this.state = {
            id: '',
            title: '',
            description: '',
            image: '',
            showDescriptionError: false,
            showTitleError: false,
            styleDescriptionError: {},
            styleTitleError: {},
            imgTemp: 'https://www.tiendeo.com/info/es/prensa/wp-content/uploads/2017/04/logo-tiendeo-vector-02.png',
            imgStyle: ''
        }
        
    }

    componentWillReceiveProps(props) {
        this.setState({ 
            id: props.card.id,
            title: props.card.title,
            description: props.card.description,
            image: props.card.image,
            imgStyle: {backgroundImage: "url(" + (props.card.image!=='' ? props.card.image : this.state.imgTemp)  + ")"}
        });
    }

    handleChangeTitle = (event) => {
        this.setState({title: event.target.value});
    }

    handleChangeDescription = (event) => {
        this.setState({description: event.target.value});
    }

    handleChangeImage = (event) => {
        this.setState({
            image: event.target.value,
            imgStyle: {backgroundImage: "url(" + (event.target.value!=='' ? event.target.value : this.state.imgTemp)  + ")"}
        });
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
            this.props.saveCard(this.state)
        }
    }

    render() {
        if(!this.props.show) {
            return null;
        } 

        return (
        <div className="backdrop" onClick={this.closeModal}>
            <div className="modal-edit">
                <div className="image-container" style={this.state.imgStyle}>
                    <button className="btn-close-modal-edit" onClick={() => this.props.closeModal()}><i className="fas fa-times"></i></button>
                </div>
                <div className="container">
                    <input placeholder="Título *" value={this.state.title} style={this.state.styleTitleError} onChange={this.handleChangeTitle} maxLength='25' />
                    <p className="char-count-edit">{this.state.title.length}/25</p>
                    {this.state.showTitleError ? <p className="error-msg-edit">El título es obligatorio</p> : null}

                    <input placeholder="Descripción *" value={this.state.description} style={this.state.styleDescriptionError} onChange={this.handleChangeDescription} maxLength='120' />
                    <p className="char-count-edit">{this.state.description.length}/120</p>
                    {this.state.showDescriptionError ? <p className="error-msg-edit">La descripción es obligatoria</p> : null}
                    
                    <input placeholder="Imagen (Url)" value={this.state.image}  onChange={this.handleChangeImage} />
                
                    <br/>
                    <button className="btn-save-card" onClick={this.checkCard}>
                        Guardar
                    </button>
                </div>
                

            </div>
        </div>
        );
    }
}

export default EditCard;