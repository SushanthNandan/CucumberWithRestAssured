package pojo;




import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import java.util.List;

import org.apache.commons.lang.builder.ToStringBuilder;


@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
"authToken",
"appId",
"appTypeUid"
})
 class User2 {

@JsonProperty("authToken")
private String authToken;
@JsonProperty("appId")
private String appId;
@JsonProperty("appTypeUid")
private String appTypeUid;

/**
* No args constructor for use in serialization
* 
*/
public User2() {
}

/**
* 
* @param appId
* @param authToken
* @param appTypeUid
*/
public User2(String authToken, String appId, String appTypeUid) {
super();
this.authToken = authToken;
this.appId = appId;
this.appTypeUid = appTypeUid;
}

@JsonProperty("authToken")
public String getAuthToken() {
return authToken;
}

@JsonProperty("authToken")
public void setAuthToken(String authToken) {
this.authToken = authToken;
}

@JsonProperty("appId")
public String getAppId() {
return appId;
}

@JsonProperty("appId")
public void setAppId(String appId) {
this.appId = appId;
}

@JsonProperty("appTypeUid")
public String getAppTypeUid() {
return appTypeUid;
}

@JsonProperty("appTypeUid")
public void setAppTypeUid(String appTypeUid) {
this.appTypeUid = appTypeUid;
}

@Override
public String toString() {
return new ToStringBuilder(this).append("authToken", authToken).append("appId", appId).append("appTypeUid", appTypeUid).toString();
}

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
"scope",
"format",
"key",
"value"
})
class Profile {

@JsonProperty("scope")
private String scope;
@JsonProperty("format")
private String format;
@JsonProperty("key")
private String key;
@JsonProperty("value")
private String value;

/**
* No args constructor for use in serialization
* 
*/
public Profile() {
}

/**
* 
* @param scope
* @param value
* @param format
* @param key
*/
public Profile(String scope, String format, String key, String value) {
super();
this.scope = scope;
this.format = format;
this.key = key;
this.value = value;
}

@JsonProperty("scope")
public String getScope() {
return scope;
}

@JsonProperty("scope")
public void setScope(String scope) {
this.scope = scope;
}

@JsonProperty("format")
public String getFormat() {
return format;
}

@JsonProperty("format")
public void setFormat(String format) {
this.format = format;
}

@JsonProperty("key")
public String getKey() {
return key;
}

@JsonProperty("key")
public void setKey(String key) {
this.key = key;
}

@JsonProperty("value")
public String getValue() {
return value;
}

@JsonProperty("value")
public void setValue(String value) {
this.value = value;
}

@Override
public String toString() {
return new ToStringBuilder(this).append("scope", scope).append("format", format).append("key", key).append("value", value).toString();
}

public class Examplepojo {
	
	
	@JsonInclude(JsonInclude.Include.NON_NULL)
	@JsonPropertyOrder({
	"sharedSecret",
	"origin",
	"user",
	"profile"
	})
	
	

		@JsonProperty("sharedSecret")
		private String sharedSecret;
		@JsonProperty("origin")
		private String origin;
		@JsonProperty("user")
		private User user;
		@JsonProperty("profile")
		private List<Profile> profile = null;

		/**
		* No args constructor for use in serialization
		* 
		*/
		public Examplepojo() {
		}

		/**
		* 
		* @param origin
		* @param user
		* @param profile
		* @param sharedSecret
		*/
		public Examplepojo(String sharedSecret, String origin, User user, List<Profile> profile) {
		super();
		this.sharedSecret = sharedSecret;
		this.origin = origin;
		this.user = user;
		this.profile = profile;
		new User();
		}

		@JsonProperty("sharedSecret")
		public String getSharedSecret() {
		return sharedSecret;
		}

		@JsonProperty("sharedSecret")
		public void setSharedSecret(String sharedSecret) {
		this.sharedSecret = sharedSecret;
		}

		@JsonProperty("origin")
		public String getOrigin() {
		return origin;
		}

		@JsonProperty("origin")
		public void setOrigin(String origin) {
		this.origin = origin;
		}

		@JsonProperty("user")
		public User getUser() {
		return user;
		}

		@JsonProperty("user")
		public void setUser(User user) {
		this.user = user;
		}

		@JsonProperty("profile")
		public List<Profile> getProfile() {
		return profile;
		}

		@JsonProperty("profile")
		public void setProfile(List<Profile> profile) {
		this.profile = profile;
		}

		@Override
		public String toString() {
		return new ToStringBuilder(this).append("sharedSecret", sharedSecret).append("origin", origin).append("user", user).append("profile", profile).toString();
		}

		}
	}





}
 



