import { Link } from "react-router-dom";
import "./fancy.scss";

const FancyButton = (props) => {
  const maskId = "mask_1";
  const maskStyle =
    "#fancy-masked-element_" +
    maskId +
    " { mask: url(#" +
    maskId +
    "); -webkit-mask: url(#" +
    maskId +
    ")}";

  const buttonStyle = {
    width: props.width,
    height: props.height,
  };

  const fancyFrontStyle = {
    transform: "rotateX(0deg) translateZ(" + props.height / 2 + "px )",
  };

  const fancyBackStyle = {
    transform: "rotateX(90deg) translateZ( " + props.height / 2 + "px )",
  };

  // SVG attributes
  const textTransform =
    "matrix(1 0 0 1 " + props.width / 2 + " " + props.height / 1.6 + ")";
  const viewBox = "0 0 " + props.width + " " + props.height;

  return (
    <div className="fancy-button mx-10" style={buttonStyle}>
      <div className="fancy-flipper">
        <Link to="/installation" className="fancy-front" style={fancyFrontStyle}>
          <svg height={props.height} width={props.width} viewBox={viewBox}>
            <defs>
              <mask id={maskId}>
                <rect width="100%" height="100%" fill="#FFFFFF" />
                <text
                  className="mask-text button-text"
                  fill="#000000"
                  transform={textTransform}
                  fontFamily="'intro_regular'"
                  fontSize={props.fontSize}
                  width="100%"
                  textAnchor="middle"
                  letterSpacing="1"
                >
                Get Started
                </text>
              </mask>
            </defs>
            <style>{maskStyle}</style>
            <rect
              id={"fancy-masked-element_" + maskId}
              fill={props.color}
              width="100%"
              height="100%"
            />
          </svg>
        </Link>
        <Link to="/installation" className="fancy-back" style={fancyBackStyle}>
          <svg height={props.height} width={props.width} viewBox={viewBox}>
            <rect
              stroke={props.color}
              strokeWidth={props.borderWidth}
              fill="transparent"
              width="100%"
              height="100%"
            />
            <text
              className="button-text"
              transform={textTransform}
              fill={props.color}
              fontFamily="'intro_regular'"
              fontSize={props.fontSize}
              textAnchor="middle"
              letterSpacing="1"
            >
                Get Started
            </text>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default FancyButton;
