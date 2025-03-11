/* eslint-disable no-unused-vars */
import WrappedTreeScene from "./3d/TreeScene";

export const Hero = ({ handleTheme }) => {
    return (

        <div 
        className="flex flex-row content-center gap-2 w-full h-full">
            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                lefto: 0
            }}>
            <WrappedTreeScene />
            </div>
        </div>
    );
}