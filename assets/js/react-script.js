//TODO: ADD EMAIL AND LINKEDIN ICONS
//TODO: ADD OPTION FOR EXEC POSITION

var Member = React.createClass({
  render: function() {
    var linkedinElement = this.props.linkedin ? (
      <a href={this.props.linkedin} className="brother-link" target="_blank">
        <img src="assets/images/brothers/icons/linkedin.png"/>
      </a>
    ) : null;

    var notpictured=this.props.notpictured;

    if (!notpictured) {
      return (
        <div className="brother">
          <div className='brother-img-container'>
            <img
              src={'assets/images/brothers/' + (this.props.notpictured ? 'icons/notpictured' : (this.props.firstname.toLowerCase() + this.props.lastname.toLowerCase())) + '_opt.jpg'}
              className='img-responsive center-block'
            />
            <div className="brother-img-overlay">
              <a href={'mailto:' + this.props.email} className="brother-link">
                <img src="assets/images/brothers/icons/email.png"/>
              </a>
              {linkedinElement}
            </div>
          </div>

          <p className="brothers-caption text-uppercase text-center">{this.props.firstname} {this.props.lastname}</p>
          <p className="brothers-subcaption text-center">{this.props.major} | {this.props.year}</p>

        </div>
      );
    }
    else {

      return null;

    }
  }
});

var LetterClass = React.createClass({
  getInitialState: function() {
    return { items: [] }
  },
  render: function() {
    var items =
      this.props.members ? this.props.members.map(function(member){
        return (
          <Member
            firstname={member.firstname}
            lastname={member.lastname}
            major={member.major}
            year={member.year}
            linkedin={member.linkedin ? member.linkedin : null}
            email={member.email}
            execposition={member.execposition ? member.execposition : null}
            notpictured={member.notPictured}
          />
        );
      }) : null;

    var notPicturedArray = []

    for (var i = 0; i < items.length;i++) {
      if (items[i].props.notpictured==true) {
        var nameString=items[i].props.firstname + " " + items[i].props.lastname;
        notPicturedArray.push(nameString);
      }
    }
    const isnotPictured = notPicturedArray.length;
    console.log(isnotPictured);
    return (
      <div className="brothers-container">
        <div className="brothers-class-title">{this.props.letter.toUpperCase()} CLASS</div>
        {items}
        <div className="brother-spacer"></div>
        <div className="brother-spacer"></div>
        <div className="brother-spacer"></div>
        <div className="brother-spacer"></div>

        {isnotPictured ? (
          <div className="not-pictured">Not Pictured: {notPicturedArray.join(", ")}</div>
          ) : (
            <div className="not-pictured"></div>
          )}

                
      </div>
    );
  }
});

var LetterClasses = React.createClass({
  getInitialState: function() {
    return { items: [] }
  },
  render: function() {
    var items =
      this.props.classes.map(function(letterclass){
        return (
          <LetterClass letter={letterclass.letter} members={letterclass.members} />
        );
      });
    return (
      <div className="classes-container">
        {items}
      </div>
    );
  }
});

ReactDOM.render(
  <LetterClasses classes={membersclasses} />,
  document.getElementById('brothers')
);
