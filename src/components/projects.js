import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, CardMenu, Button, IconButton } from 'react-mdl';

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = { activeTab: 0};
  }
  toggleCategories() {
    if(this.state.activeTab === 0) {
      return (
        <div className='projects-grid'>
        <Card shadow={5} style={{mindWidth: '450', margin: 'auto'}}>
          <CardTitle style={{color: '#000', height: '180px', background:
          'url(https://github.com/sfoust1/myportfoliosite/blob/master/Food%20Pictures/Blueberry%20Date%20Oatmeal.png) center / cover' }}>

              Snap Window
            </CardTitle>
            <CardText>
              Snaps and swaps multiple windows, JavaFX
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/sfoust1/MultiWindowManager'>GitHub</Button>
              <Button colored href='https://youtu.be/s8Fmdp6y6i8'>YouTube</Button>
            </CardActions>
            <CardMenu style ={{color: '#fff'}}>
              <IconButton name= 'share' />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <div className='projects-grid'>
          <Card shadow={5} style={{mindWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '180px', background:
            'url(https://kotlinlang.org/assets/images/open-graph/kotlin_250x250.png) center / cover' }}>

            Shopping List
            </CardTitle>
            <CardText>
              A simple, but reactive shopping app
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/sfoust1/ShoppingList'>GitHub</Button>
              <Button colored href='https://youtu.be/fts6LuNIDhc'>YouTube</Button>
            </CardActions>
            <CardMenu style ={{color: '#fff'}}>
              <IconButton name= 'share' />
            </CardMenu>
          </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div className='projects-grid'>
          <Card shadow={5} style={{mindWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '180px', background:
            'url(https://icon-library.net/images/react-icon/react-icon-29.jpg) center / cover' }}>

            Portfolio Website
            </CardTitle>
            <CardText>
              A React Udemy Course Tutorial
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/sfoust1/myportfoliosite'>GitHub</Button>
            </CardActions>
            <CardMenu style ={{color: '#fff'}}>
              <IconButton name= 'share' />
            </CardMenu>
          </Card>
        </div>
      )
    }
  }


  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})}>
          <Tab>Breakfast</Tab>
          <Tab>Morning Snack</Tab>
          <Tab>Lunch</Tab>
          <Tab>Afternoon Snack</Tab>
          <Tab>Dinner</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className='content'>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
