window.app = {views: {}, models: {}, collections: {}, api: "https://api.github.com/"};

var RepoListView = Backbone.View.extend({
		repos: null,
        initialize: function(options) {
        	
            	app.collections.repos.on("add", this.render, this);
            
        },
        el: "#repo-list",
        render: function() {     
        console.log("update the repo list")   
       		if(app.collections.repos != null){
       			var list = $("<ul>").attr("class", "repo-list");
       			app.collections.repos.each(function(repo){
       				var li = $("<li>").text(repo.get("name") + " " + repo.get("watchers_count"));
       				list.append(li);
       			});
       			
       			this.$el.html(list)
       		}     
        }
});

var SearchView = Backbone.View.extend({
        initialize: function(options) {
        	
        },
        el: "#search",
        events: {
        	"submit form" : "onSubmit"
        },
        onSubmit: function(e){
        	e.preventDefault();
        	if(app.collections.repos != null){
        		app.collections.repos.fetch({url: app.api + "users/" + $("#username").val() + "/repos", dataType: 'json', type: "GET"});
        	}
        }
        
});

var RepoModel = Backbone.Model.extend({

})

var RepoCollection = Backbone.Collection.extend({
	model: RepoModel,
	url: "https://api.github.com/users/:user/repos",
	parse: function(r){
		console.log(this);
		return r;
	}
})

app.collections.repos = new RepoCollection();

app.views.list = new RepoListView();

app.views.search = new SearchView();

//app.views.list.render();


