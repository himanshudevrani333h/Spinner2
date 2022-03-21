import styled from "styled-components";

interface ContainerProps {
    className?: string,
    startSpinningTime?: number,
    continueSpinningTime?: number,
    stopSpinningTime?: number,
    startRotationDegrees?: number,
    finalRotationDegrees?: number
}

export const RotationContainer = styled.div<ContainerProps>`
  position: absolute;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(${(props:any) => props.startRotationDegrees}deg);
  &.started-spinning {
    animation: spin ${(props:any ) => props.startSpinningTime / 1000}s
        cubic-bezier(0.71, -0.29, 0.96, 0.9) 0s 1 normal forwards running,
      continueSpin 0.75s linear
        ${(props:any) => props.startSpinningTime / 1000}s 1 normal
        forwards running,
      stopSpin ${(props:any) => props.stopSpinningTime / 1000}s
        cubic-bezier(0, 0, 0.35, 1.02)
        ${(props:any) =>
        (props.startSpinningTime + props.continueSpinningTime) / 1000}s
        1 normal forwards running;
  }
  @keyframes spin {
    from {
      transform: rotate(${(props:any) => props.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(props:any) => props.startRotationDegrees + 360}deg);
    }
  }
  @keyframes continueSpin {
    from {
      transform: rotate(${(props:any) => props.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(props:any) => props.startRotationDegrees + 360}deg);
    }
  }
  @keyframes stopSpin {
    from {
      transform: rotate(${(props:any) => props.startRotationDegrees}deg);
    }
    to {
      transform: rotate(${(props:any) => 1440 + props.finalRotationDegrees}deg);
    }
  }

  @media(min-width:375px){
      margin-left:4px;
  }
`;


export const Wheelpointer = styled.img`
         position: absolute;
          width: 3em;
          left: 8.5em;
          top: -1em;
          z-index: 2;

          @media(min-width:375px){
           height:50px;
           width: 50px;
           margin-left:4px;
           }
`

export const WheelImage:any = styled.img`
          position: relative;
            width: 100%;
            height: 100%;
            margin: 0 auto;
            transform: rotate(22.5deg)
`