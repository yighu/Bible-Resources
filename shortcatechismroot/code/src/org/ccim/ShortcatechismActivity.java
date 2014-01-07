package org.ccim;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebView;

public class ShortcatechismActivity extends Activity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    
        WebView webview = new WebView(this);
        setContentView(webview);
        	webview.loadUrl("file:///android_asset/westcatech.html"); 
    }
}