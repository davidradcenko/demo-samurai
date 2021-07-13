import React from 'react';
import '../content_profil.css'

class ProfileStatus extends React.Component {

    state = {
        editMade: false,
        status: this.props.status
    }
    activedEditMode = () => {
        this.setState({
            editMade: true
        })
        // this.state.editMade = true;
        // this.forceUpdate();
    }
    deactivedEditMode = () => {
        this.setState({
            editMade: false
        })
        // this.state.editMade = true;
        // this.forceUpdate();
        this.props.updateStatus(this.state.status);
    }
    onStutusChanche = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <>
                {!this.state.editMade &&
                    <div className="">
                        <span onDoubleClick={this.activedEditMode}>{this.props.status || '------'}</span>
                    </div>
                }
                {this.state.editMade &&
                    <div className="">
                        <input onChange={this.onStutusChanche} autoFocus={true} onBlur={this.deactivedEditMode} value={this.state.status} />
                    </div>
                }
            </>
        );
    }
}
export default ProfileStatus;