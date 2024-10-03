import { Text, TouchableOpacity, TouchableOpacityProps,  StyleSheet, ActivityIndicator } from "react-native"

interface ButtonProps extends TouchableOpacityProps{
    title: string
    isLoading?: boolean
}

export function Button({title, isLoading}: ButtonProps){
    return(
        <TouchableOpacity disabled={isLoading}>
            {isLoading ? <ActivityIndicator /> :  <Text style={styles.container}>{title}</Text>}
           
        </TouchableOpacity>
    )
}

    const styles = StyleSheet.create({
        container: {
           fontSize:14 , textAlign:'center', color:'#ffffff'
          }
    })