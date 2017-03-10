import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Cards from './cards.js'
import ViewLanguagePack from './ViewLanguagePack.js'
import SearchLibrary from './SearchLibrary.js'
import CardComponent from './CardComponent.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});
  render() {
    return (
      <MuiThemeProvider>
      <div>
        <Paper>
            <AppBar
              title="Project"
              onLeftIconButtonTouchTap={this.handleToggle}
              style={{textAlign:'center'}}
            />
              <Drawer
                docked={false}
                width={250}
                open={this.state.open}
                onRequestChange={(open) => this.setState({open})}
              >
              <MenuItem onTouchTap={this.handleClose}>Home  </MenuItem>
              <MenuItem onTouchTap={this.handleClose}>Library</MenuItem>
            </Drawer>
        </Paper>
        <SearchLibrary />
        <CardComponent />

      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
