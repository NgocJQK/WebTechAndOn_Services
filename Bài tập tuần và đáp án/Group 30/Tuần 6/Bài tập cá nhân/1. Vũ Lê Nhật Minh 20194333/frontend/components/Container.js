const Container = (props) => {
  return (
    <div>
      {props.children}
      <style jsx global>{`
        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #c4181a44;
          border-radius: 10px;
        }

        .hover-nav-button:hover {
          font-size: 1.5em;
        }
        .ant-modal-content {
          border-radius: 20px;
          /* background: red; */
        }
        .anticon-copy {
          color: white;
        }
        .black-placeholder::placeholder {
          color: #333333;
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default Container;
