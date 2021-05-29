function FooterLink({ title, link }) {
  return (
    <div className="mr-2 ml-2 mb-1">
      <a className="footer-link" href={link}>
        <div>{title}</div>
      </a>
    </div>
  );
}

export default FooterLink;
