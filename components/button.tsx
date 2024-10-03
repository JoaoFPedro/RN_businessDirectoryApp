import { Text, TouchableOpacity, TouchableOpacityProps,  StyleSheet } from "react-native"

interface ButtonProps extends TouchableOpacityProps{
    title: string
    isLoading?: boolean
}

export function Button({title}: ButtonProps){
    return(
        <TouchableOpacity>
            <Text style={styles.container}>{title}</Text>
        </TouchableOpacity>
    )
}

    const styles = StyleSheet.create({
        container: {
           fontSize:14 , textAlign:'center', color:'#ffffff'
          }
    })