(function (angular, btoa) {
    'use strict';

    /**
     * @ngdoc object
     * @name xen3r0.jenkins.jenkins
     * @description
     * Jenkins provider
     */
    angular.module('xen3r0.jenkins')
        .provider('jenkins', jenkins);

    function jenkins() {
        var jenkinsUrl = 'http://localhost:8090';
        var suffix = '/api/json';
        var username, password;

        /**
         * @ngdoc function
         * @name setJenkinsUrl
         * @methodOf xen3r0.jenkins.jenkinsProvider
         * @description
         * Set jenkins api url
         * @param {String} newApiUrl Api url
         */
        this.setJenkinsUrl = setJenkinsUrl;

        /**
         * @ngdoc function
         * @name getJenkinsUrl
         * @methodOf xen3r0.jenkins.jenkinsProvider
         * @description
         * Get jenkins url
         * @returns {String} Api url
         */
        this.getJenkinsUrl = getJenkinsUrl;

        /**
         * @ngdoc function
         * @name setUsername
         * @methodOf xen3r0.jenkins.jenkinsProvider
         * @description
         * Set username
         * @param {String} newUsername Username
         */
        this.setUsername = setUsername;

        /**
         * @ngdoc function
         * @name getUsername
         * @methodOf xen3r0.jenkins.jenkinsProvider
         * @description
         * Get username
         * @returns {String} Username
         */
        this.getUsername = getUsername;

        /**
         * @ngdoc function
         * @name setPassword
         * @methodOf xen3r0.jenkins.jenkinsProvider
         * @description
         * Set password
         * @param {String} newPassword password
         */
        this.setPassword = setPassword;

        /**
         * @ngdoc function
         * @name getPassword
         * @methodOf xen3r0.jenkins.jenkinsProvider
         * @description
         * Get password
         * @returns {String} Password
         */
        this.getPassword = getPassword;

        /**
         * @ngdoc object
         * @name xen3r0.jenkins.jenkins
         * @description
         * Jenkins service
         */
        this.$get = getFn;

        /**
         * Set jenkins url
         * @param {String} url Api url
         */
        function setJenkinsUrl(url) {
            jenkinsUrl = url;
        }

        /**
         * Get jenkins url
         * @returns {String} Api url
         */
        function getJenkinsUrl() {
            return jenkinsUrl;
        }

        /**
         * Set username
         * @param {String} newUsername Username
         */
        function setUsername(newUsername) {
            username = newUsername;
        }

        /**
         * Get username
         * @returns {String} Username
         */
        function getUsername() {
            return username;
        }

        /**
         * Set password
         * @param {String} newPassword password
         */
        function setPassword(newPassword) {
            password = newPassword;
        }

        /**
         * Get password
         * @returns {String} Password
         */
        function getPassword() {
            return password;
        }

        /* @ngInject */
        function getFn($http, $q) {
            return {
                /**
                 * @ngdoc function
                 * @name getJobs
                 * @methodOf xen3r0.jenkins.getJobs
                 * @description
                 * Jobs list
                 * @returns {Promise} Jobs as promise
                 */
                getJobs: getJobs,
                /**
                 * @ngdoc function
                 * @name headers
                 * @methodOf xen3r0.jenkins.getJob
                 * @description
                 * Job detail
                 * @param {String} name Job name
                 * @returns {Promise} Job as promise
                 */
                getJob: getJob,
                /**
                 * @ngdoc function
                 * @name headers
                 * @methodOf xen3r0.jenkins.getBuild
                 * @description
                 * Build detail
                 * @param {String} name Job name
                 * @param {Number} number Build number
                 * @returns {Promise} Build as promise
                 */
                getBuild: getBuild
            };

            /**
             * Jobs list
             * @returns {Promise} Jobs as promise
             */
            function getJobs() {
                var defered = $q.defer();

                defered.resolve([
                    {
                        name: 'API-PR'
                    },
                    {
                        name: 'IHM-PR'
                    }
                ]);

                return defered.promise;

                var headers = getAuthorizationHeaders();

                return $http.get(jenkinsUrl + suffix, {headers: headers}).then(function (result) {
                    return result.data.jobs;
                });
            }

            /**
             * Job detail
             * @param {String} name Job name
             * @returns {Promise} Job as promise
             */
            function getJob(name) {
                var headers = getAuthorizationHeaders();

                return $http.get(jenkinsUrl + '/job/' + encodeURI(name) + suffix, {headers: headers}).then(function (result) {
                    return result.data;
                });
            }

            /**
             * Build detail
             * @param {String} name Job name
             * @param {Number} number Build number
             * @returns {Promise} Build as promise
             */
            function getBuild(name, number) {
                var headers = getAuthorizationHeaders();

                return $http.get(jenkinsUrl + '/job/' + encodeURI(name) + '/' + number + suffix, {headers: headers}).then(function (result) {
                    return result.data;
                });
            }

            /**
             * Get authorization header
             * @returns {Object}
             */
            function getAuthorizationHeaders() {
                var headers = {};

                if (angular.isDefined(username) && angular.isDefined(password)) {
                    headers['Authorization'] = 'Basic ' + btoa(username + ':' + password);
                }

                return headers;
            }
        }
    }
})(angular, btoa);
