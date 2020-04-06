# View [the link](https://mineralcloud.github.io/)

Welcome to the repository of Wentzcovitch's Website.
Author: [@jappoker](https://github.com/jappoker)

If you are one of our group and want to make revision/ add contents, please choose one of the following:

1. contact [@jappoker](https://github.com/jappoker)

2. fork the repo and pull requests

The resources of the site obeys the following order:

```ruby
/_data/     # contains all the data in .yaml form
    |---alumni.yaml
    |---collaborators.yaml
    |---....
/_includes/ # contains html components
/_layouts/  # contains html templates
/folder_of_webpages/    # e.g. contact, events, publication ...
    |---index.html
/img/       # contains the photos/images
    |/collaborators/
    |/events/
    |/group_photo/
    |/...../
/static/    # contains the static files
    |/css/   
    |/js/ 
    |/img/  # ! it is different from the /img/ in the root file. 
            # Only used for logos/header-imgs. 
            # Don't put people's photo here.

404.html    # a typical 404 page
_config.yaml
index.md    # main index html page in markdown file
```

<!-- Redirect to [http://wgroup.mineralscloud.com/](http://wgroup.mineralscloud.com/) -->

## Apr. 6, 2020, update on cooperate [http://mineralscloud.com](http://mineralscloud.com) through iframe by zjy

Now the [http://mineralscloud.com](http://mineralscloud.com) is using a few pages in this repo as `iframe` inserted.
The pages are:
* People: [http://mineralscloud.com/people/](http://mineralscloud.com/people/), using [https://mineralcloud.github.io/people/vlab_people.html](https://mineralcloud.github.io/people/vlab_people.html), with data `_data/people.yaml`.
* Publications: [http://mineralscloud.com/reports/allpublications/](http://mineralscloud.com/reports/allpublications/), using [https://mineralcloud.github.io/publications/vlab_publications.html](https://mineralcloud.github.io/publications/vlab_publications.html), data in `_data/publcations.yaml`
* Events: [http://mineralscloud.com/events/](http://mineralscloud.com/events/), using [/events/vlab_events.html](https://mineralcloud.github.io/events/vlab_events.html), data in `_posts/events/*.md` (propagated as posts)

The js to control the display is `/static/js/vlab_iframe.js`.

I personally think this is the easiest way to update the website by editing some `.yaml`!
