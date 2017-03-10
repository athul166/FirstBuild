import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Edit from 'material-ui/svg-icons/image/edit';
import Close from 'material-ui/svg-icons/navigation/close'
import IconButton from 'material-ui/IconButton';


export default class ViewLanguagePack extends Component {
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
    return(
      <Card style={style}>
          <IconButton style={{'marginLeft': '850','overflowY':'hidden'}}>
            <Close />
          </IconButton>
          <GridList cellHeight={180} style={styles.gridList}>
              <GridTile>
                <img src={"http://placehold.it/200"} />
              </GridTile>
              <GridTile>
                <CardTitle title="Card title" subtitle="Card subtitle">sdaffdsfa</CardTitle>
              </GridTile>
          </GridList>
          <CardText style={{'marginTop': '-15px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
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
                <span>1.0.0</span>
              </GridTile>
              <GridTile >
                <h4>Created On</h4>
                <span>14/07/2016</span>
              </GridTile>
          </GridList>
      </Card>
    );
  }
}
