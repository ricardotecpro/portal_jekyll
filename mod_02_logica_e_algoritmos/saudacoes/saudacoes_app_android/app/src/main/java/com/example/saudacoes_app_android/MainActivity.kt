package com.example.saudacoes_app_android

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Column
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Surface
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import com.example.saudacoes_app_android.ui.theme.SaudacoesAppAndroidTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            SaudacoesApp()
        }
    }
}

@Composable
fun SaudacoesApp() {
    SaudacoesAppAndroidTheme {
        Surface(color = MaterialTheme.colors.background) {
            Column {
                GreetingMessage()
            }
        }
    }
}

@Composable
fun GreetingMessage() {
    Text(text = "Olá, Mundo!")
}

@Preview(showBackground = true)
@Composable
fun DefaultPreview() {
    SaudacoesApp()
}
