import React from "react";
import SubTitle from "./SubTitle";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { MdEmail } from "react-icons/md";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  customSubmit: {
    padding: ".4rem",
    minWidth: "14rem",
    background: "#2caeba",
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div className="row">
      <div className="col-12">
        <section className="section-contact section">
          <SubTitle title="Contact Me" styleClass="contact-header" />
          <div className="card contact-form-wrapper">
            <h4 className="contact-title">How can I help you ?</h4>
            <form className="contact-form">
              <div className="form-group">
                <TextField id="name" label="name*" className="form-input" />
              </div>
              <div className="form-group">
                <TextField id="email" label="email*" className="form-input" />
              </div>
              <div className="form-group">
                <TextField id="msg" label="msg*" className="form-input" />
              </div>
              <div className="form-group-button">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.customSubmit}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
