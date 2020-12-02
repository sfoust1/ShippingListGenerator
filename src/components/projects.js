import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, CardMenu, Button, IconButton } from 'react-mdl';
var json = require('../KidsEatInColor.json');
var convert = require('convert-units');

var cartJson = {};
class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = { activeTab: 0};
  }

  compare(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if(nameA > nameB) {
      return 1;
    } else if (nameA < nameB) {
      return -1;
    } else {
      return 0;
    }
  }
  handleSIUnits(UI, qty) {
    switch(UI) {
      case "tablespoon":
      case "teaspoon":
      case "pint":
      case "quart":
      case "gallon":
      case "fl-oz":
      case "ml":
      case "liter":
        return convert(qty).from(UI).to("cup");
      case "oz":
      case "gram":
      case "kilogram":
      case "milligram":
        return convert(qty).from(UI).to("lb");

      default:
        return qty;
    }
  }
  printObject(jsonObj) {
    var tempObj = {};
    if(cartJson.hasOwnProperty("ingredients")) {
      tempObj = cartJson["ingredients"];
    }
    for(var key in jsonObj) {
      if (tempObj.hasOwnProperty(key)) {
        console.log("We have a repeat: " + key);
        if(tempObj[key]["UI"] === jsonObj[key]["UI"]) {
          tempObj[key]["qty"] += jsonObj[key]["qty"];
        } else {
          // Ensure original object is of the unified UM
          tempObj[key]["qty"] = this.handleSIUnits(tempObj[key]["UI"],
            tempObj[key]["qty"]);
          tempObj[key]["qty"] += this.handleSIUnits(jsonObj[key]["UI"],
            jsonObj[key]["qty"])
        }
      } else {
        tempObj[key] = jsonObj[key];
      }
    }
    cartJson["ingredients"] = tempObj;
    console.log(cartJson)
  }
  toggleCategories() {
    if(this.state.activeTab === 0) {
      return (
        <ol>
        {json.filter(function(meal){ return meal.meal === "breakfast"}).map((item) =>
          <div className='Breakfast' key={item.name}>
          <Card shadow={5} style={{mindWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '180px', background:
            'url('+process.env.PUBLIC_URL+'/images/'+item.meal+'/'+item.image+') center / cover' }}>
              </CardTitle>
              <CardText>
                {item.name}
              </CardText>
              <CardActions border>
                <Button style={{float: 'right'}} onClick={() => this.printObject(item.ingredients)} >Add To Cart</Button>
              </CardActions>
              <CardMenu style ={{color: '#fff'}}>
                <IconButton name= 'share' />
              </CardMenu>
            </Card>
          </div>
        )}
        </ol>
      )
    } else if (this.state.activeTab === 1) {
      return (
        <ol>
        {json.filter(function(meal){ return meal.meal === "lunch"}).map((item) =>
          <div className='Lunch' key={item.name}>
          <Card shadow={5} style={{mindWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '180px', background:
            'url('+process.env.PUBLIC_URL+'/images/'+item.meal+'/'+item.image+') center / cover' }}>
              </CardTitle>
              <CardText>
                {item.name}
              </CardText>
              <CardActions border>
                <Button style={{float: 'right'}} onClick={() => this.printObject(item.ingredients)} >Add To Cart</Button>
              </CardActions>
              <CardMenu style ={{color: '#fff'}}>
                <IconButton name= 'share' />
              </CardMenu>
            </Card>
          </div>
        )}
        </ol>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <ol>
        {json.filter(function(meal){ return meal.meal === "dinner"}).map((item) =>
          <div className='Breakfast' key={item.name}>
          <Card shadow={5} style={{mindWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '180px', background:
            'url('+process.env.PUBLIC_URL+'/images/'+item.meal+'/'+item.image+') center / cover' }}>
              </CardTitle>
              <CardText>
                {item.name}
              </CardText>
              <CardActions border>
                <Button style={{float: 'right'}} onClick={() => this.printObject(item.ingredients)} >Add To Cart</Button>
              </CardActions>
              <CardMenu style ={{color: '#fff'}}>
                <IconButton name= 'share' />
              </CardMenu>
            </Card>
          </div>
        )}
        </ol>
      )
    } else if (this.state.activeTab === 3) {
      return (
        <ol>
        {json.filter(function(meal){ return meal.meal === "snacks"}).map((item) =>
          <div className='Breakfast' key={item.name}>
          <Card shadow={5} style={{mindWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '180px', background:
            'url('+process.env.PUBLIC_URL+'/images/'+item.meal+'/'+item.image+') center / cover' }}>
              </CardTitle>
              <CardText>
                {item.name}
              </CardText>
              <CardActions border>
                <Button style={{float: 'right'}} onClick={() => this.printObject(item.ingredients)} >Add To Cart</Button>
              </CardActions>
              <CardMenu style ={{color: '#fff'}}>
                <IconButton name= 'share' />
              </CardMenu>
            </Card>
          </div>
        )}
        </ol>
      )
    } else if (this.state.activeTab === 4) {
      var listIngredients = [];
      for(var key in cartJson["ingredients"]) {
        const tempJson = cartJson["ingredients"][key];
        listIngredients.push({"name":key, "qty":tempJson["qty"], "UI":tempJson["UI"]});
      }
      listIngredients.sort(function(a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if(nameA > nameB) {
          return 1;
        } else if (nameA < nameB) {
          return -1;
        } else {
          return 0;
        }
      });
      return (
      <ol>
      {
        listIngredients.map((item) =>
        <div className='Breakfast' key={item.name}>
          <p>
              {item.name}: {item.qty} {item.UI} (s)
          </p>
        </div>
      )}
      </ol>

      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})}>
          <Tab>Breakfast</Tab>
          <Tab>Lunch</Tab>
          <Tab>Dinner</Tab>
          <Tab>Snacks</Tab>
          <Tab>Cart</Tab>
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
