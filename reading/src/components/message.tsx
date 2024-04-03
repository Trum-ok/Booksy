function Message({ text, user }) {
  return (
    <div className="message">
      <div className="message-user">{user}</div>
      <div className="message-text">{text}</div>
    </div>
  );
}

export default Message;