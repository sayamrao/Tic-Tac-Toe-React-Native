import 'react-native-gesture-handler'
import React, {useEffect,useState} from 'react';
import { View, Button, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Tic Tac Toe"
        onPress={() => navigation.navigate('tictactoe')}
      />
      <Button
        title="Calculator"
        onPress={() => navigation.navigate('Calulatorr')}
      />
    </View>
  );
}

function tictactoe() {
  const [turn, setTurn] = useState('Player1 = O')
  const [draw1,setDraw1] = useState(null)
  const [draw2,setDraw2] = useState(null)
  const [draw3,setDraw3] = useState(null)
  const [draw4,setDraw4] = useState(null)
  const [draw5,setDraw5] = useState(null)
  const [draw6,setDraw6] = useState(null)
  const [draw7,setDraw7] = useState(null)
  const [draw8,setDraw8] = useState(null)
  const [draw9,setDraw9] = useState(null)
  useEffect(()=> checkWin(turn,setTurn,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9),[draw1])
  useEffect(()=> checkWin(turn,setTurn,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9),[draw2])
  useEffect(()=> checkWin(turn,setTurn,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9),[draw3])
  useEffect(()=> checkWin(turn,setTurn,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9),[draw4])
  useEffect(()=> checkWin(turn,setTurn,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9),[draw5])
  useEffect(()=> checkWin(turn,setTurn,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9),[draw6])
  useEffect(()=> checkWin(turn,setTurn,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9),[draw7])
  useEffect(()=> checkWin(turn,setTurn,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9),[draw8])
  useEffect(()=> checkWin(turn,setTurn,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9),[draw9])

  return (
    <View style={styles.container}>
      <View style = {{flex:2,alignItems:'center',justifyContent:'center'}}>
      <Text style = {{fontStyle:'italic',fontSize:60,color:'red', alignItems:'center',justifyContent:'center'}}> Tic Tac Toe</Text>
      </View>
      <View style = {styles.Info}>
      <Text style = {styles.InfoText}> {turn} </Text>
      </View>

      <View style = {styles.buttons}>
        <View style = {styles.row1}>
        <TouchableOpacity style = {styles.button1} onPress = {()=> { Draw(turn,setTurn,setDraw1,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9);  
            }}>
        <Text style = {styles.drawText}>
          {draw1}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button2} onPress = {() =>{ Draw(turn,setTurn,setDraw2,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9);
         }}>
        <Text style = {styles.drawText}>
          {draw2}
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.button3} onPress = {()=> {Draw(turn,setTurn,setDraw3,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9);
           }}>
        <Text style = {styles.drawText}>
          {draw3}
          </Text>
          </TouchableOpacity>
      </View>
      <View style = {styles.row1}>
        <TouchableOpacity style = {styles.button1} onPress = {()=> { Draw(turn,setTurn,setDraw4,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9);
         }}>
        <Text style = {styles.drawText}>
          {draw4}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button2} onPress = {() => {Draw(turn,setTurn,setDraw5,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9);
         }}>
        <Text style = {styles.drawText}>
          {draw5}
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.button3} onPress = {()=> {Draw(turn,setTurn,setDraw6);
           }}>
        <Text style = {styles.drawText}>
          {draw6}
          </Text>
          </TouchableOpacity>
      </View>
      <View style = {styles.row1}>
        <TouchableOpacity style = {styles.button1} onPress = {()=> { Draw(turn,setTurn,setDraw7,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9);
         }}>
        <Text style = {styles.drawText}>
          {draw7}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button2} onPress = {() => { Draw(turn,setTurn,setDraw8,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9);
         }}>
        <Text style = {styles.drawText}>
          {draw8}
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.button3} onPress = {()=> {Draw(turn,setTurn,setDraw9,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9);
           }}>
        <Text style = {styles.drawText}>
          {draw9}
          </Text>
          </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

function Draw(turn,setTurn,setDraw,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9)
{
    if(turn == 'Player1 = O')
    {
      setDraw('O')
      setTurn('Player2 = X')
    }
    else if(turn == 'Player2 = X')
    {
      setDraw('X')
      setTurn('Player1 = O')
    }
}

function checkWin(turn,setTurn,draw1,draw2,draw3,draw4,draw5,draw6,draw7,draw8,draw9)
{
    if((draw1 == draw2 && draw1 == draw3) && (draw1 == 'X'|| draw1 == 'O'))
    {
      if(draw1 == 'X')
        {
            setTurn('Player 2 Wins')
        }
      else if(draw1 == 'O' )
      {
        setTurn('Player 1 Wins')
      }
    }
    else if((draw1 == draw4 && draw1 == draw7) && (draw1 == 'X'|| draw1 == 'O'))
    {
      if(draw1 == 'X')
        {
          setTurn('Player 2 Wins')
        }
      else if(draw1 == 'O' )
      {
        setTurn('Player 1 Wins')
      }
    }
    else if((draw1 == draw5 && draw1 == draw9) && (draw1 == 'X'|| draw1 == 'O'))
    {
      if(draw1 == 'X')
        {
            setTurn('Player 2 Wins')
        }
      else if(draw1 == 'O' )
      {
        setTurn('Player 1 Wins')
      }
    }
    else if((draw2 == draw5 && draw2 == draw8) && (draw2 == 'X'|| draw2 == 'O'))
    {
      if(draw2 == 'X')
        {
            setTurn('Player 2 Wins')
        }
      else if(draw2 == 'O' )
      {
        setTurn('Player 1 Wins')
      }
    }
    else if((draw4 == draw5 && draw4 == draw6) && (draw4 == 'X'|| draw4 == 'O'))
    {
      if(draw4 == 'X')
        {
            setTurn('Player 2 Wins')
        }
      else if(draw4 == 'O' )
      {
        setTurn('Player 1 Wins')
      }
    }
    else if((draw7 == draw8 && draw7 == draw9) && (draw7 == 'X'|| draw7 == 'O'))
    {
      if(draw7 == 'X')
        {
          setTurn('Player 2 Wins')
        }
      else if(draw7 == 'O' )
      {
        setTurn('Player 1 Wins')
      }
    }
    else if((draw3 == draw6 && draw3 == draw9) && (draw3 == 'X'|| draw3 == 'O'))
    {
      if(draw3 == 'X')
      {
        setTurn('Player 2 Wins')
      }
      else if(draw3 == 'O' )
      {
        setTurn('Player 1 Wins')
      }
    }
    else if((draw3 == draw5 && draw3 == draw7) && (draw3 == 'X'|| draw3 == 'O'))
    {
      if(draw3 == 'X')
        {
            setTurn('Player 2 Wins')
        }
      else if(draw3 == 'O' )
      {
        setTurn('Player 1 Wins')
      }
    }
    else if(draw1 != null && draw2 != null && draw3 != null && draw4 != null && draw5 != null && draw6 != null && draw7 != null && draw8 != null && draw9 != null)
    {
      setTurn('Draw')
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategrey',
    alignItems: 'stretch',
    justifyContent: 'center',

  },
  Info: {
    flex : 1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'darkslategrey',
    },
    InfoText:{
      color:'black',
      fontSize: 50,
    },
    buttons:{
      flex : 5,
      backgroundColor:'black',
      alignItems:'stretch',
      justifyContent:'center',
    },
    drawText:{
      color:'black',
      fontSize:50,
    },
    row1:{
      flex:1.3,
      flexDirection:'row',
      alignItems:'stretch',
      justifyContent:'center',
      margin:2
    },
    button1:{
      flex : 2,
      backgroundColor:'red',
      alignItems:'center',
      justifyContent:'center',
      margin:2,
    },
    button2:{
      flex : 2,
      backgroundColor:'red',
      alignItems:'center',
      justifyContent:'center',
      margin:2,
      width:100,
    },
    button3:{
      flex : 2,
      backgroundColor:'red',
      alignItems:'center',
      justifyContent:'center',
      margin:2
    },
});

function calculatorr()
{
  const[Result,setResult] = useState(null)
  return( 
    <View style = {styles1.container1}>
      <View style = {styles1.topp}>
  <Text style = {{color:'white',fontSize:60}}> {Result} </Text>
  </View>
  <View style = {styles1.contt}>
  <View style = {styles1.container2}> 
  <TouchableOpacity style = {styles1.button1} onPress= {()=> setResult(null)}>
    <Text style = {{color:'white',fontSize:23}}> C </Text>
  </TouchableOpacity>
  <TouchableOpacity style = {styles1.button1} onPress= {()=> setResult(Result*-1)}>
    <Text style = {{color:'white',fontSize:23}} > +/- </Text>
  </TouchableOpacity>
  <TouchableOpacity style = {styles1.button1} onPress= {()=> setResult(Result/100)}>
    <Text style = {{color:'white',fontSize:23}}> % </Text>
  </TouchableOpacity>
  <TouchableOpacity style = {styles1.button2} onPress= {()=> input("÷",Result,setResult)}>
    <Text style = {{color:'white',fontSize:23}}> ÷ </Text>
  </TouchableOpacity>
</View>

<View style = {styles1.container2}> 
  <TouchableOpacity style = {styles1.button1} onPress= {()=> input("7",Result,setResult)}>
    <Text style = {{color:'white',fontSize:23}}> 7 </Text>
  </TouchableOpacity>
  <TouchableOpacity style = {styles1.button1} onPress= {()=> input("8",Result,setResult)}>
    <Text style = {{color:'white',fontSize:23}}> 8 </Text>
  </TouchableOpacity>
  <TouchableOpacity style = {styles1.button1} onPress= {()=> input("9",Result,setResult)}>
    <Text style = {{color:'white',fontSize:23}}> 9 </Text>
  </TouchableOpacity>
  <TouchableOpacity style = {styles1.button2} onPress= {()=> input("×",Result,setResult)}>
    <Text style = {{color:'white',fontSize:23}}> × </Text>
  </TouchableOpacity>
</View>
<View style = {styles1.container2}> 
  <TouchableOpacity style = {styles1.button1} onPress= {()=> input("4",Result,setResult)}>
    <Text style = {{color:'white',fontSize:23}}> 4 </Text>
  </TouchableOpacity>
  <TouchableOpacity style = {styles1.button1} onPress= {()=> input("5",Result,setResult)}>
    <Text style = {{color:'white',fontSize:23}}> 5 </Text>
  </TouchableOpacity>
  <TouchableOpacity style = {styles1.button1} onPress= {()=> input("6",Result,setResult)}>
    <Text style = {{color:'white',fontSize:23}}> 6 </Text>
  </TouchableOpacity>
  <TouchableOpacity style = {styles1.button2} onPress= {()=> input("-",Result,setResult)}>
    <Text style = {{color:'white',fontSize:23}}> - </Text>
  </TouchableOpacity>
</View>
<View style = {styles1.container2}> 
  <TouchableOpacity style = {styles1.button1} onPress= {()=> input("1",Result,setResult)}>
    <Text style = {{color:'white',fontSize:23}}> 1 </Text>
  </TouchableOpacity>
  <TouchableOpacity style = {styles1.button1} onPress= {()=> input("2",Result,setResult)}>
    <Text style = {{color:'white',fontSize:23}}> 2 </Text>
  </TouchableOpacity>
  <TouchableOpacity style = {styles1.button1} onPress= {()=> input("3",Result,setResult)}>
    <Text style = {{color:'white',fontSize:23}}> 3 </Text>
  </TouchableOpacity>
  <TouchableOpacity style = {styles1.button2} onPress= {()=> input("+",Result,setResult)}>
    <Text style = {{color:'white',fontSize:23}}> + </Text>
  </TouchableOpacity>
</View>
<View style = {styles1.container2}> 
  <TouchableOpacity style = {styles1.button3} onPress= {()=> input("0",Result,setResult)}>
    <Text style = {{color:'white',fontSize:23}}> 0 </Text>
  </TouchableOpacity>

  <TouchableOpacity style = {styles1.button4} onPress= {()=> input(".",Result,setResult)}>
    <Text style = {{color:'white',fontSize:23}}> . </Text>
  </TouchableOpacity>
  <TouchableOpacity style = {styles1.button5} onPress= {()=> getresult(Result,setResult)}>
    <Text style = {{color:'white',fontSize:23}}> = </Text>
  </TouchableOpacity>
</View>
</View>
    </View>

  );  
  }
function input(nmbr,Result,setResult)
{
  if(Result == null)
  {
    setResult(nmbr)
  }
  else
  {
    setResult(Result+nmbr)
  }
}

function getresult(Result,setResult)
{
  let i =0;let check = 0;
  while(i<Result.length)
  {
    if(Result[i] == '÷'||Result[i] == '×'||Result[i] == '+'||Result[i] == '-')
    {
      if((Result[i] == '-'|| Result[i] == '+') && i == 0)
      {

      }
      else
      check++;
    }
    i++;
  }
  i=0;
  if(check == 1)
    {for(i=0;i<Result.length && (isNaN(Result[i])==false|| Result[i]=='.') ;i++)
    {
      
    }
    if(Result[i] == '+')
    {
      setResult(parseFloat(Result.substring(0,i))+parseFloat(Result.substring(i+1,Result.length)))
    }
    
    if(Result[i] == '-')
    {
      setResult(parseFloat(Result.substring(0,i))-parseFloat(Result.substring(i+1,Result.length)))
    }
    
    if(Result[i] == '×')
    {
      setResult(parseFloat(Result.substring(0,i))*parseFloat(Result.substring(i+1,Result.length)))
    }
    if(Result[i] == '÷')
    {
      if(Result.substring(i+1,Result.length) == "0")
      {
          setResult("Cannot Divide")
      }
      else{
      setResult(parseFloat(Result.substring(0,i))/parseFloat(Result.substring(i+1,Result.length)))
      }
    }
  }
  else{
    setResult('Error')
  }
}

const styles1 = StyleSheet.create(
{
  container1: {
    flex:1,
    backgroundColor:'black'

},
topp:{
  flex:2,
  flexDirection:'row-reverse',
  alignItems:'center',
},
contt:{
    flex:4,
    alignItems:'stretch',
    justifyContent:'center'
},
  container2:{
    flex: 0.8,
    alignItems:'stretch',
    color:'white',
    justifyContent:'center',
    flexDirection:'row',
  },
  container3:{
    flex: 0.8,
    alignItems:'stretch',
    color:'white',
    justifyContent:'center',
    flexDirection:'row',
  },
  button1:{
    flex:2,
    backgroundColor:'rgb(49,49,49)',
    margin:2,
    alignItems:'center',
    justifyContent:'center',


  },
  button2: {
    flex:2,
    backgroundColor:'rgb(246,154,10)',
    alignItems:'center',
    justifyContent:'center',
    margin:2,
  },
  button3:{
    flex:2.02,
    backgroundColor:'rgb(49,49,49)',
    marginLeft:2,
    marginTop:2,
    marginRight:2,
    alignItems:'center',
    justifyContent:'center'

  },
  button4:{
    flex:1,
    backgroundColor:'rgb(49,49,49)',
    margin:2,
    alignItems:'center',
    justifyContent:'center'

  },
  button5: {
    flex:1,
    backgroundColor:'rgb(246,154,10)',
    alignItems:'center',
    justifyContent:'center',
    margin:2,
  },
});

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="tictactoe" component={tictactoe} />
        <Stack.Screen name = "Calculatorr" component = {calculatorr} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
