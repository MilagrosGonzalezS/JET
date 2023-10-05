import PropTypes from "prop-types";

export default function MenuLink(props) {
  return (
    <li className="my-4 mx-4 huge:mx-12">
      <a
        className="tracking-widest text-xs huge:text-xl relative group"
        href={props.href}
        data-drawer-hide="drawer-right-example"
        aria-controls="drawer-right-example"
      >
        {props.title}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 mt-2 bg-accent transition-all group-hover:w-full"></span>
      </a>
    </li>
  );
}

MenuLink.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string.isRequired, // You can specify the expected type and any validation rules here
};
