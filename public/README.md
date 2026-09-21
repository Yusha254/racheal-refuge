# public/

The original HTML pages reference a background image:

    racheal-refuge-design.png

That file was not included in the provided source pages, so it isn't
present here. Every place that uses it (hero banners, program cards,
featured program panel, owner photos) layers a color gradient over the
image via CSS `background`, so the pages render correctly with just the
gradient even without the file.

To restore the photo background, add the real image to this folder as:

    public/racheal-refuge-design.png
