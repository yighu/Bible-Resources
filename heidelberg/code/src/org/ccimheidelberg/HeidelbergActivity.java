package org.ccimheidelberg;

import android.app.Activity;
import android.os.Bundle;
import android.webkit.WebView;

public class HeidelbergActivity extends Activity {
    /** Called when the activity is first created. */
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WebView webview = new WebView(this);
        setContentView(webview);
        	webview.loadUrl("file:///android_asset/heidelberg.html"); 

    }
}