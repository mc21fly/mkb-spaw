export default function Alignment(props) {
  return (left, right, center) => {
    return props.right ? right : props.center ? center : left;
  };
}
