//https://api.github.com/users/codeyourfuture/repos

const reposPromise = fetch('https://api.github.com/users/minotad66/repos')
.then(response => response.json())

const data = [
    {
      "id": 75015169,
      "node_id": "MDEwOlJlcG9zaXRvcnk3NTAxNTE2OQ==",
      "name": "api-demo",
      "full_name": "CodeYourFuture/api-demo",
      "private": false,
      "owner": {
        "login": "CodeYourFuture",
        "id": 22743767,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjIyNzQzNzY3",
        "avatar_url": "https://avatars3.githubusercontent.com/u/22743767?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/CodeYourFuture",
        "html_url": "https://github.com/CodeYourFuture",
        "followers_url": "https://api.github.com/users/CodeYourFuture/followers",
        "following_url": "https://api.github.com/users/CodeYourFuture/following{/other_user}",
        "gists_url": "https://api.github.com/users/CodeYourFuture/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/CodeYourFuture/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/CodeYourFuture/subscriptions",
        "organizations_url": "https://api.github.com/users/CodeYourFuture/orgs",
        "repos_url": "https://api.github.com/users/CodeYourFuture/repos",
        "events_url": "https://api.github.com/users/CodeYourFuture/events{/privacy}",
        "received_events_url": "https://api.github.com/users/CodeYourFuture/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/CodeYourFuture/api-demo",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/CodeYourFuture/api-demo",
      "forks_url": "https://api.github.com/repos/CodeYourFuture/api-demo/forks",
      "keys_url": "https://api.github.com/repos/CodeYourFuture/api-demo/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/CodeYourFuture/api-demo/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/CodeYourFuture/api-demo/teams",
      "hooks_url": "https://api.github.com/repos/CodeYourFuture/api-demo/hooks",
      "issue_events_url": "https://api.github.com/repos/CodeYourFuture/api-demo/issues/events{/number}",
      "events_url": "https://api.github.com/repos/CodeYourFuture/api-demo/events",
      "assignees_url": "https://api.github.com/repos/CodeYourFuture/api-demo/assignees{/user}",
      "branches_url": "https://api.github.com/repos/CodeYourFuture/api-demo/branches{/branch}",
      "tags_url": "https://api.github.com/repos/CodeYourFuture/api-demo/tags",
      "blobs_url": "https://api.github.com/repos/CodeYourFuture/api-demo/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/CodeYourFuture/api-demo/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/CodeYourFuture/api-demo/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/CodeYourFuture/api-demo/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/CodeYourFuture/api-demo/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/CodeYourFuture/api-demo/languages",
      "stargazers_url": "https://api.github.com/repos/CodeYourFuture/api-demo/stargazers",
      "contributors_url": "https://api.github.com/repos/CodeYourFuture/api-demo/contributors",
      "subscribers_url": "https://api.github.com/repos/CodeYourFuture/api-demo/subscribers",
      "subscription_url": "https://api.github.com/repos/CodeYourFuture/api-demo/subscription",
      "commits_url": "https://api.github.com/repos/CodeYourFuture/api-demo/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/CodeYourFuture/api-demo/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/CodeYourFuture/api-demo/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/CodeYourFuture/api-demo/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/CodeYourFuture/api-demo/contents/{+path}",
      "compare_url": "https://api.github.com/repos/CodeYourFuture/api-demo/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/CodeYourFuture/api-demo/merges",
      "archive_url": "https://api.github.com/repos/CodeYourFuture/api-demo/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/CodeYourFuture/api-demo/downloads",
      "issues_url": "https://api.github.com/repos/CodeYourFuture/api-demo/issues{/number}",
      "pulls_url": "https://api.github.com/repos/CodeYourFuture/api-demo/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/CodeYourFuture/api-demo/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/CodeYourFuture/api-demo/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/CodeYourFuture/api-demo/labels{/name}",
      "releases_url": "https://api.github.com/repos/CodeYourFuture/api-demo/releases{/id}",
      "deployments_url": "https://api.github.com/repos/CodeYourFuture/api-demo/deployments",
      "created_at": "2016-11-28T21:19:02Z",
      "updated_at": "2016-11-28T21:20:27Z",
      "pushed_at": "2016-12-18T11:21:08Z",
      "git_url": "git://github.com/CodeYourFuture/api-demo.git",
      "ssh_url": "git@github.com:CodeYourFuture/api-demo.git",
      "clone_url": "https://github.com/CodeYourFuture/api-demo.git",
      "svn_url": "https://github.com/CodeYourFuture/api-demo",
      "homepage": null,
      "size": 239,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "Python",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": false,
      "has_pages": true,
      "forks_count": 0,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 0,
      "open_issues": 0,
      "watchers": 0,
      "default_branch": "master"
    },
    {
      "id": 82218620,
      "node_id": "MDEwOlJlcG9zaXRvcnk4MjIxODYyMA==",
      "name": "api-proxies",
      "full_name": "CodeYourFuture/api-proxies",
      "private": false,
      "owner": {
        "login": "CodeYourFuture",
        "id": 22743767,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjIyNzQzNzY3",
        "avatar_url": "https://avatars3.githubusercontent.com/u/22743767?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/CodeYourFuture",
        "html_url": "https://github.com/CodeYourFuture",
        "followers_url": "https://api.github.com/users/CodeYourFuture/followers",
        "following_url": "https://api.github.com/users/CodeYourFuture/following{/other_user}",
        "gists_url": "https://api.github.com/users/CodeYourFuture/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/CodeYourFuture/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/CodeYourFuture/subscriptions",
        "organizations_url": "https://api.github.com/users/CodeYourFuture/orgs",
        "repos_url": "https://api.github.com/users/CodeYourFuture/repos",
        "events_url": "https://api.github.com/users/CodeYourFuture/events{/privacy}",
        "received_events_url": "https://api.github.com/users/CodeYourFuture/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/CodeYourFuture/api-proxies",
      "description": "Proxy to allow our students to interact with github and other apis without having to worry about auth, rate limiting etc",
      "fork": false,
      "url": "https://api.github.com/repos/CodeYourFuture/api-proxies",
      "forks_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/forks",
      "keys_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/teams",
      "hooks_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/hooks",
      "issue_events_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/issues/events{/number}",
      "events_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/events",
      "assignees_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/assignees{/user}",
      "branches_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/branches{/branch}",
      "tags_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/tags",
      "blobs_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/languages",
      "stargazers_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/stargazers",
      "contributors_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/contributors",
      "subscribers_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/subscribers",
      "subscription_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/subscription",
      "commits_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/contents/{+path}",
      "compare_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/merges",
      "archive_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/downloads",
      "issues_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/issues{/number}",
      "pulls_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/labels{/name}",
      "releases_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/releases{/id}",
      "deployments_url": "https://api.github.com/repos/CodeYourFuture/api-proxies/deployments",
      "created_at": "2017-02-16T19:37:12Z",
      "updated_at": "2017-02-16T20:03:44Z",
      "pushed_at": "2017-02-26T18:11:23Z",
      "git_url": "git://github.com/CodeYourFuture/api-proxies.git",
      "ssh_url": "git@github.com:CodeYourFuture/api-proxies.git",
      "clone_url": "https://github.com/CodeYourFuture/api-proxies.git",
      "svn_url": "https://github.com/CodeYourFuture/api-proxies",
      "homepage": null,
      "size": 4,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 0,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 0,
      "open_issues": 0,
      "watchers": 0,
      "default_branch": "master"
    },
    {
      "id": 103732853,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMDM3MzI4NTM=",
      "name": "api-workshop",
      "full_name": "CodeYourFuture/api-workshop",
      "private": false,
      "owner": {
        "login": "CodeYourFuture",
        "id": 22743767,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjIyNzQzNzY3",
        "avatar_url": "https://avatars3.githubusercontent.com/u/22743767?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/CodeYourFuture",
        "html_url": "https://github.com/CodeYourFuture",
        "followers_url": "https://api.github.com/users/CodeYourFuture/followers",
        "following_url": "https://api.github.com/users/CodeYourFuture/following{/other_user}",
        "gists_url": "https://api.github.com/users/CodeYourFuture/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/CodeYourFuture/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/CodeYourFuture/subscriptions",
        "organizations_url": "https://api.github.com/users/CodeYourFuture/orgs",
        "repos_url": "https://api.github.com/users/CodeYourFuture/repos",
        "events_url": "https://api.github.com/users/CodeYourFuture/events{/privacy}",
        "received_events_url": "https://api.github.com/users/CodeYourFuture/received_events",
        "type": "Organization",
        "site_admin": false
      },
      "html_url": "https://github.com/CodeYourFuture/api-workshop",
      "description": null,
      "fork": false,
      "url": "https://api.github.com/repos/CodeYourFuture/api-workshop",
      "forks_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/forks",
      "keys_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/keys{/key_id}",
      "collaborators_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/collaborators{/collaborator}",
      "teams_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/teams",
      "hooks_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/hooks",
      "issue_events_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/issues/events{/number}",
      "events_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/events",
      "assignees_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/assignees{/user}",
      "branches_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/branches{/branch}",
      "tags_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/tags",
      "blobs_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/git/blobs{/sha}",
      "git_tags_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/git/tags{/sha}",
      "git_refs_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/git/refs{/sha}",
      "trees_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/git/trees{/sha}",
      "statuses_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/statuses/{sha}",
      "languages_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/languages",
      "stargazers_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/stargazers",
      "contributors_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/contributors",
      "subscribers_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/subscribers",
      "subscription_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/subscription",
      "commits_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/commits{/sha}",
      "git_commits_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/git/commits{/sha}",
      "comments_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/comments{/number}",
      "issue_comment_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/issues/comments{/number}",
      "contents_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/contents/{+path}",
      "compare_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/compare/{base}...{head}",
      "merges_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/merges",
      "archive_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/{archive_format}{/ref}",
      "downloads_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/downloads",
      "issues_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/issues{/number}",
      "pulls_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/pulls{/number}",
      "milestones_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/milestones{/number}",
      "notifications_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/notifications{?since,all,participating}",
      "labels_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/labels{/name}",
      "releases_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/releases{/id}",
      "deployments_url": "https://api.github.com/repos/CodeYourFuture/api-workshop/deployments",
      "created_at": "2017-09-16T07:06:51Z",
      "updated_at": "2017-09-16T07:14:41Z",
      "pushed_at": "2017-09-16T08:30:56Z",
      "git_url": "git://github.com/CodeYourFuture/api-workshop.git",
      "ssh_url": "git@github.com:CodeYourFuture/api-workshop.git",
      "clone_url": "https://github.com/CodeYourFuture/api-workshop.git",
      "svn_url": "https://github.com/CodeYourFuture/api-workshop",
      "homepage": null,
      "size": 81,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 11,
      "mirror_url": null,
      "archived": false,
      "disabled": false,
      "open_issues_count": 0,
      "license": null,
      "forks": 11,
      "open_issues": 0,
      "watchers": 0,
      "default_branch": "master"
    }]

const repoWrap = document.querySelector('.repos-wrap')
const btn = document.querySelector('.boton')
const quantity = document.querySelector('.repos-quantity')
const fakePromise = Promise.resolve(data)

function datos_web(){
    //fakePromise
    reposPromise
    .then(repos => {const html = repos.map(
        repo => {
            return ` <div class="repo">
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
    </div>`
        })
        return html.join('')
    })
    .then(htmlList => {
        repoWrap.innerHTML = htmlList
    })
}

function renderLength(){
    //fakePromise
    reposPromise
    .then(repos => repos.length)
    .then(length =>`<p>Qty: <b> ${length} </b> </p> `)
    .then(htmlList => {
        quantity.innerHTML = htmlList
    })
}

btn.addEventListener('click', () => {
    renderLength()
    datos_web()
})

