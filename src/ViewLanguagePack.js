import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Edit from 'material-ui/svg-icons/image/edit';
import Close from 'material-ui/svg-icons/navigation/close'
import IconButton from 'material-ui/IconButton';
import SearchLibrary from './SearchLibrary.js'


export default class ViewLanguagePack extends Component {
  constructor(){
    super();
    this.state={
      closeStatus:false
    };
  }
  handleClose(){
    this.setState({closeStatus:true});
  }
  render(){
       const style =  {
         'width' : "60%",
         'margin' : 'auto',
         'marginTop' : 10

       };
       const styles = {
        gridList: {
          width: 500,
          height: 200,
          paddingTop: 15,
          paddingLeft: 15,
          marginTop:'-50'
        },
      };
      if(this.state.closeStatus===false)
      {
          return(
              <Card style={style}>
                  <IconButton style={{'marginLeft': '850','overflowY':'hidden'}}>
                    <Close onClick={this.handleClose.bind(this)}/>
                  </IconButton>
                  <GridList cellHeight={180} style={styles.gridList}>
                      <GridTile>
                        <img src={"http://placehold.it/200"} />
                      </GridTile>
                      <GridTile>
                        <CardTitle title={this.props.SelectedCard[0].Name} subtitle={this.props.SelectedCard[0].Creator}>
                          {this.props.SelectedCard[0].tags}<br/>
                          {this.props.SelectedCard[0].downloads}
                        </CardTitle>
                      </GridTile>
                  </GridList>
                  <CardText style={{'marginTop': '-15px'}}>
                    {this.props.SelectedCard[0].description}
                  </CardText>
                  <div style={{'width':'100%','marginLeft' :'100','marginRight' :'100','marginTop':'10','marginBottom':'10'}}>
                    <img src={"http://placehold.it/700x400"} />
                    <FloatingActionButton style={{'marginLeft': '625','marginTop': '-77px','marginBottom': '32px','overflowY':'hidden'}}>
                      <Edit />
                    </FloatingActionButton>
                  </div>

                  <Divider style={{'marginLeft' :'20','marginRight' :'20'}} />
                  <h3 style={{'marginLeft': '20px','margin-bottom': '-12px'}}> Additional Information</h3>
                  <GridList cellHeight={100} style={{'marginLeft':20}}>
                      <GridTile >
                        <h4>Version</h4>
                        <span>{this.props.SelectedCard[0].version}</span>
                      </GridTile>
                      <GridTile >
                        <h4>Created On</h4>
                        <span>{this.props.SelectedCard[0].created_on}</span>
                      </GridTile>
                  </GridList>
              </Card>
            );
        }
        else {
          return(
              <SearchLibrary />
          );
        }
  }
}
