import React from 'react'

export default function ChangeAuthMode(props) {
    return (
        <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={props.changeAuthMode}>
                {props.componentText}
            </span>
        </div>
    )
}
