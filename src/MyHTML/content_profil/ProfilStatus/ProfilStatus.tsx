import React, { ChangeEvent } from 'react';
import '../content_profil.css'


type PropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}
type StateType = {
    editMade: boolean
    status: string
}
class ProfileStatus extends React.Component<PropsType, StateType> {

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
    onStutusChanche = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: PropsType) {

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