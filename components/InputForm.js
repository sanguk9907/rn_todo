import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slice/TodoSlice';

const InputForm = () => {
  const [currentValue, setCurrentValue] = useState();
  const dispatch = useDispatch();

  const handleSubmit = ()=>{
    if(currentValue !== ''){
      dispatch(addTodo(currentValue))
      setCurrentValue('')
    }else{
      alert("내용을 입력해주세요.")
    }
  }
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.addFormContainer}
    >
      <TextInput
      style={styles.inputField}
      placeholder='할 일을 입력해주세요.'
      value={currentValue}
      onChangeText={setCurrentValue}
      onSubmitEditing={handleSubmit}
      />
      <Pressable style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  )
}

export default InputForm

const styles = StyleSheet.create({
    addFormContainer:{
        flexDirection:"row",
        marginTop:"auto",
        marginBottom:30,
        paddingHorizontal:20,
        backgroundColor:"#f7f8fa"
    },
    inputField:{
        flex:1,
        height:42,
        padding:5,
        marginRight:25,
        borderRadius:4,
        borderColor:"rgba(0,0,0,0.2)",
        borderWidth:1,
        color:"#000",
        fontSize:15,
        textAlignVertical:"center"
    },
    addButton:{
        justifyContent:"center",
        alignItems:"center",
        width:42,
        height:42,
        borderRadius:4,
        backgroundColor:"rgba(0,0,0,0.7)"
    },
    addButtonText:{
        color:"white",
        fontSize:24,
    }
})