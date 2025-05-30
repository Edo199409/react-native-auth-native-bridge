package com.authnativebridge

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Callback

class CustomModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "CustomModule"
    }

    @ReactMethod
    fun sendMessage(message: String, callback: Callback) {
        val response = "Received: $message"
        callback.invoke(response)
    }
}