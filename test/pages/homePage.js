class HomePage{
    allFiles='//android.widget.LinearLayout[@content-desc="All Files"]/android.widget.TextView'
    recents= '//android.widget.LinearLayout[@content-desc="Recents"]/android.widget.TextView'
    offline= '//android.widget.LinearLayout[@content-desc="Offline"]/android.widget.TextView'
    sortBy='~Sort by…'
    sortByName='//android.widget.TextView[@resource-id="com.box.android:id/title"]'
    transfer= '//android.widget.ImageView[@resource-id="com.box.android:id/transfer_icon"]'
    userIcon= '//android.widget.TextView[@resource-id="com.box.android:id/box_avatar_initials"]'
    addFile='android.view.View'
    browse= '//android.widget.FrameLayout[@content-desc="Browse"]/android.widget.FrameLayout/android.widget.ImageView'
    navigate= '//android.widget.FrameLayout[@content-desc="Collections"]/android.widget.FrameLayout/android.widget.ImageView'
    search= '//android.widget.FrameLayout[@content-desc="Search"]/android.widget.FrameLayout/android.widget.ImageView'
    inbox= '//android.widget.FrameLayout[@content-desc="Inbox"]'
}
module.exports= new HomePage()