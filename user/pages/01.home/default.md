---
title: Home
body_classes: 'title-center title-h1h2'
radky:
    -
        pocet: 4
        gallery:
            user/pages/01.home/DSC_4154.jpg:
                name: DSC_4154.jpg
                type: image/jpeg
                size: 466769
                path: user/pages/01.home/DSC_4154.jpg
            user/pages/01.home/DSC_4285.jpg:
                name: DSC_4285.jpg
                type: image/jpeg
                size: 490292
                path: user/pages/01.home/DSC_4285.jpg
            user/pages/01.home/DSC_4352.jpg:
                name: DSC_4352.jpg
                type: image/jpeg
                size: 439612
                path: user/pages/01.home/DSC_4352.jpg
            user/pages/01.home/DSC_4227.jpg:
                name: DSC_4227.jpg
                type: image/jpeg
                size: 359778
                path: user/pages/01.home/DSC_4227.jpg
            user/pages/01.home/DSC_4631.jpg:
                name: DSC_4631.jpg
                type: image/jpeg
                size: 434248
                path: user/pages/01.home/DSC_4631.jpg
    -
        gallery:
            user/pages/01.home/14372370_1403809736300539_3779038615882732278_o.jpg:
                name: 14372370_1403809736300539_3779038615882732278_o.jpg
                type: image/jpeg
                size: 266314
                path: user/pages/01.home/14372370_1403809736300539_3779038615882732278_o.jpg
            user/pages/01.home/14379645_1403808426300670_6887721044770005087_o.jpg:
                name: 14379645_1403808426300670_6887721044770005087_o.jpg
                type: image/jpeg
                size: 397309
                path: user/pages/01.home/14379645_1403808426300670_6887721044770005087_o.jpg
---

# Say Hello to Grav!
## installation successful...

Congratulations! You have installed the **Base Grav Package** that provides a **simple page** and the default **Quark** theme to get you started.

!! If you see a **404 Error** when you click `Typography` in the menu, please refer to the [troubleshooting guide](http://learn.getgrav.org/troubleshooting/page-not-found).

### Find out all about Grav

* Learn about **Grav** by checking out our dedicated [Learn Grav](http://learn.getgrav.org) site.
* Download **plugins**, **themes**, as well as other Grav **skeleton** packages from the [Grav Downloads](http://getgrav.org/downloads) page.
* Check out our [Grav Development Blog](http://getgrav.org/blog) to find out the latest goings on in the Grav-verse.

!!! If you want a more **full-featured** base install, you should check out [**Skeleton** packages available in the downloads](http://getgrav.org/downloads).

### Edit this Page

To edit this page, simply navigate to the folder you installed **Grav** into, and then browse to the `user/pages/01.home` folder and open the `default.md` file in your [editor of choice](http://learn.getgrav.org/basics/requirements).  You will see the content of this page in [Markdown format](http://learn.getgrav.org/content/markdown).

### Create a New Page

Creating a new page is a simple affair in **Grav**.  Simply follow these simple steps:

1. Navigate to your pages folder: `user/pages/` and create a new folder.  In this example, we will use [explicit default ordering](http://learn.getgrav.org/content/content-pages) and call the folder `02.mypage`.
2. Launch your text editor and paste in the following sample code:

        ---
        title: My New Page
        ---
        # My New Page!

        This is the body of **my new page** and I can easily use _Markdown_ syntax here.

3. Save this file in the `user/pages/02.mypage/` folder as `default.md`. This will tell **Grav** to render the page using the **default** template.
4. That is it! Reload your browser to see your new page in the menu.

! NOTE: The page will automatically show up in the Menu after the "Home" menu item. If you wish to change the name that shows up in the Menu, simple add: `menu: My Page` between the dashes in the page content. This is called the YAML front matter, and it is where you configure page-specific options.
